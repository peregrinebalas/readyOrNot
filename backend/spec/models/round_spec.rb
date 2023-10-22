require 'rails_helper'

describe Round, type: :model do
    describe 'validations' do
        it { should validate_presence_of :timer }
        it { should validate_presence_of :active }
    end
end