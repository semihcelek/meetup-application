using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SemihCelek.Meetup.api.Services;

namespace SemihCelek.Meetup.api.Installers
{
    public class ServiceInstaller : IInstaller
    {
        public void InstallServices(IServiceCollection services, IConfiguration configuration)
        {
            services.AddScoped<IPostService, PostService>();

        }
    }
}