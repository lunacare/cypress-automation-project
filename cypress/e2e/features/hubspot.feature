Feature: Hubspot

    Scenario: creating a therapist and syncing in Luxe
        Given A therapist is created thru API
        When It is searched in Luxe therapist profiles
        Then All therapist information matches

        Scenario: creating a patient and syncing in Luxe
        Given A patient is created thru API
        When It is searched in Luxe patient profiles
        Then All patient information matches



        Scenario: creating a physician and syncing in Luxe
        Given A physician is created thru API
        When It is searched in Luxe physician profiles
        Then All physician information matches