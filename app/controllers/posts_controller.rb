class PostsController < ApplicationController
 protect_from_forgery except: :login

  def index
    @posts = Post.all.order(created_at: :desc)
  end

  def show
    @post = Post.find_by(id:params[:id])
  end

  def new
  end

  def create
    puts params
    @post = Post.new(content: params[:content])
    @post.save

    redirect_to("/posts/index")
  end

  def edit
    @post = Post.find_by(id: params[:id])
  end

  def update
    @post = Post.find_by(id: params[:id])
    @post.content = params[:content]
    @post.save

    redirect_to("/posts/index")
  end

  def destroy
    @post = Post.find_by(id: params[:id])
    @post.destroy

    redirect_to("/posts/index")
  end

  def face_detection(data)
    Curl.post("https://api.projectoxford.ai/face/v1.0/detect", [data] ) do |curl|
    # Curl.post("https://api.projectoxford.ai/face/v1.0/detect", "{ url: '#{self.file.url}' }" ) do |curl|
      curl.headers["Ocp-Apim-Subscription-Key"] = Rails.application.secrets.microsoft['face_api_key']
      curl.headers["Content-Type"] = 'application/json'
    end
  end

  def login

    puts params[:file]
    # response = face_detection(data)
    # age = response.age
    # puts age
    # if age > 60 # rails string to int
    #   return {'result': true}
    # else
    #   return {'result': false}
    # end
  end
end
