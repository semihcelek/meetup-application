using System.Collections.Generic;

namespace SemihCelek.Meetup.api.Contracts.V1.Responses
{
    public class RegistrationResponse
    {
        public class Success
        {
            public string Token { get; set; }
        }

        public class Fail
        {
            public string Error { get; set; }
        }
    }
}