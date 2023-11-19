package response

type ResponseMeta struct {
	AppStatusCode int    `json:"code"`
	Message       string `json:"statusType,omitempty"`
	ErrorDetail   string `json:"errorDetail,omitempty"`
	ErrorMessage  string `json:"errorMessage,omitempty"`
	DevMessage    string `json:"devErrorMessage,omitempty"`
}

type HTTPErr struct {
	Err  error
	Code int
}

// Response is a wrapper response structure
type Response struct {
	Status interface{} `json:"status"`
	Data   interface{} `json:"data, omitempty"`
}

// ErrResponse renderer type for handling all sorts of errors.
type ErrResponse struct {
	HTTPStatusCode int          `json:"-"` // http response status code
	Status         ResponseMeta `json:"status"`
	AppCode        int64        `json:"code,omitempty"` // application-specific error code
}
