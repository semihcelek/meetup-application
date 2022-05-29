using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using SemihCelek.Meetup.api.Domain;

namespace SemihCelek.Meetup.api.Services
{
    public interface IPostService
    {
        Task<List<PostModel>> GetAllPostsAsync();
        Task<bool> CreatePostAsync(PostModel post);
        Task<PostModel> GetPostAsync(int id);
        Task<bool> DeletePostAsync(int id);
    }
}