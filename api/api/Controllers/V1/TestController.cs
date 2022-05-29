using Microsoft.AspNetCore.Mvc;

namespace SemihCelek.Meetup.api.Controllers.V1
{
    public class TestController : Controller
    {
        [HttpGet("api/test")]
        public IActionResult Get()
        {
            return Ok(new {name = "annen"});
        }
    }
}