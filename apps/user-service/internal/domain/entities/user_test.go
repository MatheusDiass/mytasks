package entities

import (
	"testing"
)

func TestNewUser(t *testing.T) {
	t.Run("invalid user name", func(t *testing.T) {
		_, err := NewUser("uuid", "", "1999-11-27", "matheus.dias@email.com")

		if err == nil {
			t.Errorf("Expected an error for invalid user name, but got: %v", err)
		}
	})

	t.Run("invalid user birth", func(t *testing.T) {
		_, err := NewUser("uuid", "Matheus Dias", "invalid-date", "matheus.dias@email.com")

		if err == nil {
			t.Errorf("Expected an error for invalid user birth date, but got: %v", err)
		}
	})

	t.Run("validate user email", func(t *testing.T) {
		invalidEmails := []string{
			"",                      // empty
			"plainaddress",          // missing @
			"@no-local-part.com",    // missing local part
			"no-at-sign.com",        // missing @
			"no-tld@domain",         // missing TLD
			"no-domain@.com",        // missing domain
			"missing-username@.com", // missing local part
			"space in@email.com",    // contains space
			"email@domain..com",     // double dots
			"email@-domain.com",     // domain starts with hyphen
			"email@domain-.com",     // domain ends with hyphen
			"email@domain.c",        // TLD with one character
			"email@.com",            // empty domain
		}

		for _, email := range invalidEmails {
			_, err := NewUser("uuid", "Test User", "1999-11-27", email)
			if err == nil {
				t.Errorf("Expected an error for invalid user email: %s, but got none", email)
			}
		}
	})

}
