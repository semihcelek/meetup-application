using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SemihCelek.Meetup.api.Contracts.V1;
using SemihCelek.Meetup.api.Domain;
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

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpGet(ApiRouter.Meetup.Get)]
        public async Task<IActionResult> GetMeetup([FromRoute] int id)
        {
            return Ok(await _meetupService.GetMeetupAsync(id));
        }

        [HttpPost(ApiRouter.Meetup.Create)]
        public async Task<IActionResult> CreateMeetup([FromBody] MeetupModel meetupModel)
        {
            string baseUrl = $"{HttpContext.Request.Scheme}://{HttpContext.Request.Host.ToUriComponent()}";
            string location = baseUrl + "/" + ApiRouter.Meetup.Get.Replace("{id}", meetupModel.Id.ToString());

            await _meetupService.CreateMeetupAsync(meetupModel);

            return Created(location, meetupModel);
        }

        [HttpGet(ApiRouter.Meetup.Delete)]
        public async Task<IActionResult> DeleteMeetup([FromRoute] int id)
        {
            return Ok(await _meetupService.DeleteMeetupAsync(id));
        }
    }
}