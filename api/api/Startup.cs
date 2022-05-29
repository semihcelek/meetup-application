using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using SemihCelek.Meetup.api.Data;
using SemihCelek.Meetup.api.Options;
using SemihCelek.Meetup.api.Services;

namespace SemihCelek.Meetup.api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<DataContext>(options =>
            {
                // options.UseSqlite(
                //     Configuration.GetConnectionString("Mssql"));
                // options.UseMySql(Configuration.GetConnectionString("MysqlConnection"),
                //         new MySqlServerVersion(new Version(5, 7,38)))
                //     .LogTo(Console.WriteLine, LogLevel.Information)
                //     .EnableSensitiveDataLogging()
                //     .EnableDetailedErrors();
                // options.UseSqlServer(Configuration.GetConnectionString("Mssql"));
                options.UseNpgsql(Configuration.GetConnectionString("PostgresConnection"));
            });
            services.AddDatabaseDeveloperPageExceptionFilter();

            services.AddScoped<IPostService, PostService>();
            
            services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = true)
                .AddEntityFrameworkStores<DataContext>();
            services.AddControllersWithViews();

            services.AddSwaggerGen(x =>
            {
                x.SwaggerDoc("v1", new OpenApiInfo {Title = "Meetup Api", Version = "v1"});
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            SwaggerOptions swaggerOptions = new SwaggerOptions();
            Configuration.GetSection(nameof(Swashbuckle.AspNetCore.Swagger.SwaggerOptions)).Bind(swaggerOptions);

            app.UseSwagger(options => { options.RouteTemplate = swaggerOptions.JsonRoute; });

            app.UseSwaggerUI(options =>
            {
                options.SwaggerEndpoint(swaggerOptions.UiEndpoint, swaggerOptions.Description);
            });

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
                endpoints.MapRazorPages();
            });
        }
    }
}