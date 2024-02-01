class UsersController < ApplicationController
    def create
        User.new()
    end

    def destroy
        
    end

    def update

    end

    def show

    end

    def user_params
        params.require(:user).permit(:email, :password)
    end
end
