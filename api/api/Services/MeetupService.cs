using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SemihCelek.Meetup.api.Data;
using SemihCelek.Meetup.api.Domain;

namespace SemihCelek.Meetup.api.Services
{
    public class MeetupService : IMeetupService
    {
        private readonly DataContext _dataContext;

        public MeetupService(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public async Task<List<MeetupModel>> GetAllMeetupAsync()
        {
            return await _dataContext.MeetupDataContext.ToListAsync();
        }

        public async Task<MeetupModel> GetMeetupAsync(int id)
        {
            return await _dataContext.MeetupDataContext.FirstOrDefaultAsync(m => m.Id == id);
        }

        public async Task<bool> CreateMeetupAsync(MeetupModel meetupModel)
        {
            await _dataContext.MeetupDataContext.AddAsync(meetupModel);
            var created = await _dataContext.SaveChangesAsync();
            return created > 0;
        }

        public async Task<bool> DeleteMeetupAsync(int id)
        {
            MeetupModel meetupToDelete = await GetMeetupAsync(id);
            _dataContext.MeetupDataContext.Remove(meetupToDelete);
            await _dataContext.SaveChangesAsync();
            return true;
        }
    }
}