using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SemihCelek.Meetup.api.Contracts.V1;
using SemihCelek.Meetup.api.Domain;
using SemihCelek.Meetup.api.Services;

namespace SemihCelek.Meetup.api.Controllers.V1
{
    public class PostController : Controller
    {
        private readonly IPostService _postService;

        public PostController(IPostService postService)
        {
            _postService = postService;
        }

        [HttpGet(ApiRouter.Post.GetAll)]
        public async Task<IActionResult> GetAllPosts()
        {
            return Ok(await _postService.GetAllPostsAsync());
        }

        [HttpGet(ApiRouter.Post.Get)]
        public async Task<IActionResult> GetOnePost([FromRoute] int id)
        {
            return Ok(await _postService.GetPostAsync(id));
        }

        [HttpPost(ApiRouter.Post.Create)]
        public async Task<IActionResult> CreatePost([FromBody] PostModel postModel)
        {
            string baseUrl = $"{HttpContext.Request.Scheme}://{HttpContext.Request.Host.ToUriComponent()}";
            string location = baseUrl + "/" + ApiRouter.Post.Get.Replace("{id}", postModel.Title);

            await _postService.CreatePostAsync(postModel);

            return Created(location, postModel);
        }

        [HttpGet(ApiRouter.Post.Delete)]
        public async Task<IActionResult> DeletePost([FromRoute] int id)
        {
            return Ok(await _postService.DeletePostAsync(id));
        }
    }
}