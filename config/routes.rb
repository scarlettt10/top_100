Rails.application.routes.draw do
  
  resources :song, except: [:new, :edit]
  end
end
