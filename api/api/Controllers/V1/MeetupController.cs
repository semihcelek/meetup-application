using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SemihCelek.Meetup.api.Contracts.V1;
using SemihCelek.Meetup.api.Services;

namespace SemihCelek.Meetup.api.Controllers.V1
{
    public class MeetupController : Controller
    {
        private readonly IMeetupService _meetupService;

        public MeetupController(IMeetupService meetupService)
        {
            _meetupService = meetupService;
        }

        [HttpGet(ApiRouter.Meetup.GetAll)]
        public async Task<IActionResult> GetAllMeetups()
        {
            return Ok(await _meetupService.GetAllMeetupAsync());
        }

        [HttpGet(ApiRouter.Meetup.Get)]
        public async Task<IActionResult> GetMeetup([FromRoute]int id)
        {
            return Ok(await _meetupService.GetMeetupAsync(id));
        }
    }
}