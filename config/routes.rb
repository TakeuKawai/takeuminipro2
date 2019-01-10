Rails.application.routes.draw do
  get 'posts/index' => 'posts#index'
  get 'posts/new'=> 'posts#new'
  get 'posts/:id' => 'posts#show'
  get '/' => 'home#top'
  get 'about' => 'home#about'
  get 'posts/:id/edit'=> 'posts#edit'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post 'posts/create' => 'posts#create'
  post 'posts/:id/update' => 'posts#update'
  post 'posts/:id/destroy' => 'posts#destroy'
  # post 'posts/login' => 'posts#login'
end
