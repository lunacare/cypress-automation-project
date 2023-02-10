Feature: Hubspot

    Scenario: creating a therapist and syncing in Luxe
        Given A therapist is created thru API
        When It is searched in Luxe therapist profiles
        Then All therapist information matches