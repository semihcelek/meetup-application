namespace SemihCelek.Meetup.api.Domain
{
    public class AuthenticationResult
    {
        public string Token { get; set; }
     
        public bool Success { get; set; }
        
        public string ErrorMessage { get; set; }
    }
}