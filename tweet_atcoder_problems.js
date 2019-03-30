const main = function() {
    const input = document.getElementById('input').value;

    url = 'https://kenkoooo.com/atcoder/atcoder-api/v2/user_info?user=' + input;
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.send();

    const user_id = document.getElementById('user_id');
    const accepted_count = document.getElementById('accepted_count');
    const accepted_count_rank = document.getElementById('accepted_count_rank');
    const rated_point_sum = document.getElementById('rated_point_sum');
    const rated_point_sum_rank = document.getElementById('rated_point_sum_rank'); 
    const tweet = document.getElementById('tweet');

    request.onload = function() {
        const user_info = request.response
        user_id.textContent = 'User ID : ' + user_info['user_id'];
        accepted_count.textContent = 'Accepted : ' + user_info['accepted_count'];
        accepted_count_rank.textContent = 'Accepted Count Rank : ' + user_info['accepted_count_rank'];
        rated_point_sum.textContent = 'Rated Point Sum : ' + user_info['rated_point_sum'];
        rated_point_sum_rank.textContent = 'Rated Point Sum Rank : ' + user_info['rated_point_sum_rank'];

        tweetURL = 'https://twitter.com/intent/tweet?&text=Tweet%20AtCoder%20Problem%0a'
                    + 'User%20ID%20:%20' + user_info['user_id']
                    + '%0aAccepted%20:%20' + user_info['accepted_count'] + '%20(' + user_info['accepted_count_rank'] + 'th)%0a'
                    + 'Rated%20Point%20Sum%20:%20' + user_info['rated_point_sum'] + "%20(" + user_info['rated_point_sum_rank'] + 'th)%20';
        tweet.textContent = 'tweet';
        tweet.href = tweetURL;
    }
};
