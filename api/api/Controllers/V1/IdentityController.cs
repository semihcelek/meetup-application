using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SemihCelek.Meetup.api.Contracts.V1;
using SemihCelek.Meetup.api.Contracts.V1.Responses;
using SemihCelek.Meetup.api.Domain;
using SemihCelek.Meetup.api.Services;

namespace SemihCelek.Meetup.api.Controllers.V1
{
    public class IdentityController : Controller
    {
        private readonly IIdentityService _identityService;

        public IdentityController(IIdentityService identityService)
        {
            _identityService = identityService;
        }

        [HttpPost(ApiRouter.Identity.Register)]
        public async Task<IActionResult> Register([FromBody] UserRegistrationRequest request)
        {
            AuthenticationResult authResponse = await _identityService.RegisterAsync(request.Email, request.Password);

            if (!authResponse.Success)
            {
                return BadRequest(new RegistrationResponse.Fail
                {
                    Error = authResponse.ErrorMessage
                });
            }

            return Ok(new RegistrationResponse.Success
            {
                Token = authResponse.Token
            });
        }

        [HttpPost(ApiRouter.Identity.Login)]
        public async Task<IActionResult> Login([FromBody] UserLoginRequest request)
        {
            AuthenticationResult authResponse = await _identityService.LoginAsync(request.Email, request.Password);

            if (!authResponse.Success)
            {
                return BadRequest(new LoginResponse.Fail
                {
                    Error = authResponse.ErrorMessage
                });
            }

            return Ok(new LoginResponse.Success
            {
                Token = authResponse.Token,
                Email = request.Email
            });
        }
    }
}