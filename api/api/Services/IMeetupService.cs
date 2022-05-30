using System.Collections.Generic;
using System.Threading.Tasks;
using SemihCelek.Meetup.api.Domain;

namespace SemihCelek.Meetup.api.Services
{
    public interface IMeetupService
    {
        Task<List<MeetupModel>> GetAllMeetupAsync();
        Task<object> GetMeetupAsync(int id);
    }
}