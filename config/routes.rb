Rails.application.routes.draw do
  root 'game#play'

  get '/play', to: 'game#play'
  get '/result/:shape', to: 'game#result', as: :result
end
