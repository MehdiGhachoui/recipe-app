package recipe

type Recipe struct {
	id          int
	name        string
	picture     string
	ingredients []string
	notes       string
	calories    int
	time        int
	meal        string
}
