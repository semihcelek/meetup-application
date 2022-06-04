using System.Collections.Generic;
using System.Threading.Tasks;
using SemihCelek.Meetup.api.Domain;

namespace SemihCelek.Meetup.api.Services
{
    public interface IMeetupService
    {
        Task<List<MeetupModel>> GetAllMeetupAsync();
        Task<MeetupModel> GetMeetupAsync(int id);
        Task<bool> CreateMeetupAsync(MeetupModel meetupModel);
        Task<bool> DeleteMeetupAsync(int id);
    }
}