using System.Threading.Tasks;
using SemihCelek.Meetup.api.Domain;

namespace SemihCelek.Meetup.api.Services
{
    public interface IIdentityService
    {
        Task<AuthenticationResult> RegisterAsync(string email, string password);

        Task<AuthenticationResult> LoginAsync(string email, string password);
    }
}