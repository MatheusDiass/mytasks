package entities

import (
	"errors"
	"regexp"
	"strings"
	"time"
)

type User struct {
	ID        string `json:"id"`
	Name      string `json:"name"`
	DateBirth string `json:"dateBirth"`
	Email     string `json:"email"`
}

func NewUser(id, name, dateBirth, email string) (*User, error) {
	if strings.TrimSpace(name) == "" || len(name) < 2 {
		return nil, errors.New("the name is invalid")
	}

	_, err := time.Parse("2006-01-02", dateBirth)
	if err != nil {
		return nil, errors.New("the date of birth is invalid")
	}

	regex := regexp.MustCompile(`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`)
	hasDoubleDots := strings.Contains(email, "..")
	hasSpace := strings.Contains(email, " ")
	hasInvalidHyphenUsage := strings.Contains(email, "@-") ||
		strings.Contains(email, "-.") ||
		strings.Contains(email, ".–")

	if !regex.MatchString(email) || hasDoubleDots || hasInvalidHyphenUsage || hasSpace {
		return nil, errors.New("the email is invalid")
	}

	return &User{
		ID:        id,
		Name:      name,
		DateBirth: dateBirth,
		Email:     email,
	}, nil
}
