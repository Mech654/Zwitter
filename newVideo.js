document.addEventListener('DOMContentLoaded', function() {
    const forYou = document.querySelector('.ForYou');
    const following = document.querySelector('.Following');

    forYou.addEventListener('click', function() {
        forYou.classList.add('active');
        following.classList.remove('active');
    });

    following.addEventListener('click', function() {
        following.classList.add('active');
        forYou.classList.remove('active');
    });
});

// Update the event listener for the form submission
document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const postContent = document.getElementById('postContent').value;
    const tags = document.getElementById('tags').value;
    const youtubeLink = document.getElementById('youtubeLink').value;
    const postsDiv = document.getElementById('posts');

    let videoId;

    // Extract video ID based on URL type
    if (youtubeLink.includes('shorts')) {
        videoId = youtubeLink.split('/shorts/')[1].split('?')[0];
    } else if (youtubeLink.includes('youtu.be')) {
        videoId = youtubeLink.split('youtu.be/')[1];
    } else {
        videoId = youtubeLink.split('v=')[1]?.split('&')[0];
    }

    if (videoId) {
        // Create post HTML with improved structure and responsiveness
        const postHtml = `
            <div class="post">
                <div class="postContent">
                    <p>${postContent}</p>
                    <div class="videoContainer">
                        <iframe 
                            src="https://www.youtube.com/embed/${videoId}" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </div>
        `;
        postsDiv.innerHTML += postHtml;
        
        // Clear the input fields after posting
        document.getElementById('postContent').value = '';
        document.getElementById('youtubeLink').value = '';
    }
});
