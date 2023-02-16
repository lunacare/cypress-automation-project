Feature: Hubspot

    
    Scenario: creating a physician and syncing in Luxe
    Given A physician is created thru API
    When It is searched in Luxe physician profiles
    Then All physician information matches

    Scenario: creating a therapist and syncing in Luxe
    Given A therapist is created thru API
    When It is searched in Luxe therapist profiles
    Then All therapist information matches