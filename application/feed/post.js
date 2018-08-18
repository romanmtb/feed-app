export class Post {
    constructor(model) {
        const {id, author, post, date, likes, comments, tags} = model;

        this.id = id;
        this.author = author;
        this.post = post;
        this.date = date;
        this.likes = likes;

        this.comments = comments;
        this.showComments = false;

        this.tags = tags;

        this.addLike = this.addLike.bind(this);
        this.addComment = this.addComment.bind(this);
        this.render = this.render.bind(this);
        this.showAllComments = this.showAllComments.bind(this);
    }

    addLike() {
        this.likes++;
    }

    addComment(e) {
        e.preventDefault();
        if (!e.target.elements.comment.value) return;
        // {
        //     author: { first, last... },
        //     text: 'text',
        // }
        this.comments.push({ 
            author: {
                avatarUrl:"http://placehold.it/32x32",
                email:"",
                firstName: e.target.elements.user_name.value,
                guid: "",
                lastName:"",
                rank: 0,
            },
            text: e.target.elements.comment.value });
        
        let commentTemplate =
            `<div class="commentList">
                <ul class="nth_comment">
                    <li>
                        <p><b>${e.target.elements.user_name.value}</b></p>
                        <p>${e.target.elements.comment.value}</p></br>
                    </li>
                </ul>
            </div>`;
       
        document.getElementById(`post_${this.id}`).querySelector('.all_comments').innerHTML += commentTemplate;
        document.getElementById(`post_${this.id}`).querySelector('.comments_text').innerHTML = `All comments (${this.comments.length})`;
    
        e.target.elements.comment.value = '';
    }

    showAllComments() {

        if( this.showComments ){
            document.getElementById(`post_${this.id}`).querySelector('.all_comments').innerHTML = '';
            this.showComments = false;
        } else {
            this.showComments = true;
            let newArrComm = this.comments.map( comment => {
                comment = `<div class="commentList">
                            <ul class="nth_comment">
                                <li>
                                    <p><b>${comment.author.firstName} ${comment.author.lastName}</b></p>
                                    <p><em>${comment.text}</em></p></br>
                                </li>
                            </ul>
                        </div>`
                return comment;
            });
            document.getElementById(`post_${this.id}`).querySelector('.all_comments').innerHTML = newArrComm.join('\n');
            document.getElementById(`post_${this.id}`).querySelector('.comments_text').innerHTML = `All comments (${this.comments.length})`;
        }
        
       
    }

    render(){

        let currentUser = JSON.parse(localStorage.getItem('SigUpUser'));

        let div = document.createElement('div');
        div.innerHTML =  `
        <div class="post" id="post_${this.id}">

            <div class="header_post">
                <div class="user_avatar" title="avatar">
                    <a href="#">
                        <img src="${this.author.avatarUrl}">
                    </a>
                </div>
                <div class="wrap_date_name">
                    <span class="user_name">${this.author.firstName} ${this.author.lastName}</span>
                    <span class="user_date">${this.date}</span>
                </div>
            </div>

            <div class="main_img_post">
                <img src="${this.post.imageUrl}" alt="">
            </div>

            <div class="likes">
                <a href="#" class="_addLike">
                    <span class="like_count">♥</span>
                    <span class="like_text">${this.likes} Likes</span>
                </a>
            </div>

            <div class="tags">
                ${this.tags.map(tag => `<a href="#${tag}">#${tag}</a>`).join('\n')}
            </div>

            <div class="wrap_main_text">
                <p class="main_text">${this.post.description}</p>
            </div>

            <div class="footer_post">
                <span class="comments_text">All comments (${this.comments.length})</span>
                <div class="all_comments"></div>
                ${
                    currentUser !== null ?
                            `<form class="comment_form">
                                <input hidden name="user_name" value="${currentUser.name} ${currentUser.last}"/>
                                <input name="comment" type="text" placeholder="Write your comment...">
                                <button type="submit" title="send" class="_addComment"> > </button>
                            </form>`
                    : ''
                    
                }
            </div>
        </div>`;

        let _addLike = div.querySelector('._addLike');
        let showAllComments = div.querySelector('.comments_text');
        if( currentUser !== null){
            let comment_form = div.querySelector('.comment_form');
            comment_form.addEventListener('submit', this.addComment );
        }
        
       showAllComments.addEventListener('click', this.showAllComments );


        _addLike.addEventListener('click', (e) => {
          e.preventDefault();
          this.addLike();
          let block = document.getElementById('post_'+this.id)
            .querySelector('.like_text').innerText = `${this.likes} likes`;
        });

        return div;
    }

}