package response

import (
	"errors"
	"fmt"
	"net/http"

	"github.com/go-chi/render"
)

func (e HTTPErr) Error() string {
	return fmt.Sprintf("%s", e.Err)
}

// New returns new http error from error object and a code
func New(err error, code int) *HTTPErr {
	return &HTTPErr{
		Err:  err,
		Code: code,
	}
}

// Error returns an HTTPError
func Error(err interface{}) *HTTPErr {
	switch err.(type) {
	case *HTTPErr:
		return err.(*HTTPErr)
	case error:
		return &HTTPErr{
			Err:  err.(error),
			Code: http.StatusInternalServerError,
		}
	default:
		return &HTTPErr{
			Err:  errors.New("unknown error"),
			Code: http.StatusInternalServerError,
		}
	}
}

func (e *ErrResponse) Render(w http.ResponseWriter, r *http.Request) error {
	render.Status(r, e.HTTPStatusCode)
	return nil
}

// Render for All Responses
func (rd *Response) Render(w http.ResponseWriter, r *http.Request) error {
	return nil
}

func WrapHandlerFunc(route string, name string, handler http.HandlerFunc) (string, http.HandlerFunc) {
	return route, handler
}

// NewSuccessResponse returns a new success response
func NewSuccessResponse(status int, data interface{}) *Response {
	return &Response{
		Status: &ResponseMeta{
			AppStatusCode: status,
			Message:       "SUCCESS",
		},
		Data: data,
	}
}

func ErrInvalidRequest(err error, status int, message string) render.Renderer {
	return &ErrResponse{
		HTTPStatusCode: status,
		Status: ResponseMeta{
			AppStatusCode: status,
			Message:       "ERROR",
			ErrorMessage:  "Invalid Request",
			ErrorDetail:   message,
			DevMessage:    err.Error(),
		},
	}
}

// ErrNotFound returns a 404
var ErrNotFound = &ErrResponse{
	HTTPStatusCode: http.StatusOK,
	Status: ResponseMeta{
		AppStatusCode: http.StatusNotFound,
		Message:       "ERROR",
		ErrorDetail:   "Resource not found",
		ErrorMessage:  "The endpoint you were seeking burned down",
	},
}
