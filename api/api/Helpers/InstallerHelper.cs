using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SemihCelek.Meetup.api.Installers;

namespace SemihCelek.Meetup.api.Helpers
{
    public static class InstallerHelper
    {
        public static void InstallApplication(this IServiceCollection serviceCollection, IConfiguration configuration)
        {
            List<IInstaller> installers = typeof(Startup).Assembly.ExportedTypes
                .Where(i => typeof(IInstaller).IsAssignableFrom(i) && !i.IsInterface && !i.IsAbstract)
                .Select(Activator.CreateInstance).Cast<IInstaller>().ToList();

            installers.ForEach(i => i.InstallServices(serviceCollection, configuration));
        }
    }
}