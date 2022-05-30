using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace SemihCelek.Meetup.api.Installers
{
    public interface IInstaller
    {
        void InstallServices(IServiceCollection service, IConfiguration configuration);
    }
}