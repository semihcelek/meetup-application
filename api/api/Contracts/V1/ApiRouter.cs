namespace SemihCelek.Meetup.api.Contracts.V1
{
    public static class ApiRouter
    {
        private const string Root = "api";
        private const string Version = "/v1";

        public const string Base = Root + Version;

        public static class Post
        {
            public const string Get = Base + "/post/{id}";
            public const string GetAll = Base + "/post/all";
            public const string Create = Base + "/post";
            public const string Delete = Base + "/post/delete/{id}";
        }
    } 
}