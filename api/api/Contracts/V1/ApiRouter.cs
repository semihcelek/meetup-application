namespace SemihCelek.Meetup.api.Contracts.V1
{
    public static class ApiRouter
    {
        private const string Root = "api";
        private const string Version = "/v1";

        private const string Base = Root + Version;

        public static class Post
        {
            public const string Get = Base + "/post/{id}";
            public const string GetAll = Base + "/post/all";
            public const string Create = Base + "/post";
            public const string Delete = Base + "/post/delete/{id}";
        }

        public static class Meetup
        {
            public const string Get = Base + "/meetup/{id}";
            public const string GetAll = Base + "/meetup/all";
            public const string Create = Base + "/meetup";
            public const string Delete = Base + "/meetup/delete/{id}";
        }

        public static class Identity
        {
            public const string Login = Base + "/user/login";
            public const string Register = Base + "/user/register";
        }
    }
}