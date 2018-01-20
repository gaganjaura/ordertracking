
import { Injectable } from '@angular/core';
import { DatePipe, TitleCasePipe } from '@angular/common'

import { DataService } from '../../service/data-service';
import { AuthService } from '../../service/auth-service';
import { ProfileViewModel } from '../../model/profile';
import { User } from '../../model/user';

const MODEL_NAME = 'Customers';

@Injectable()
export class ProfileService {
    private user: User;

    constructor(private service: DataService, private authService: AuthService
                ,private datePipe: DatePipe, private titleCasePipe: TitleCasePipe){        
        service.setModel(MODEL_NAME);
    }
    
    public getCustomerInfo(customerId: string) : ProfileViewModel {
        if (typeof(customerId) == "object"){
            this.user = this.authService.getUserInfo();
            customerId = this.user.userId;
        }
        
        let profile = new ProfileViewModel();
                
        this.service
        .getById<any>(customerId)
        .subscribe((data: any) => {
            this.updateProfileModel(data, profile);
        },
        error => () => {
            console.log('Error');
        });    

        return profile;
    }

    private getFullAddress(addressObject: any) : string {
        let fullAddress: string;

        fullAddress = addressObject.address_1;
        if (addressObject.address_2)
            fullAddress += ' ' + addressObject.address_2;
        
        fullAddress += ' ' +  addressObject.city;
        fullAddress += ' ' +  addressObject.state;
        fullAddress += ' ' +  addressObject.zip;

        return fullAddress;
    }

    private updateProfileModel(data, profile): void {
        profile.FirstName = data.first_name;
        profile.MiddleName = data.middle_name;
        profile.LastName = data.last_name
        profile.FullName = data.full_name;
        profile.Gender = this.titleCasePipe.transform(data.gender);
        profile.MobileNumber = data.mobile;
        profile.Address1 = data.address_info.address_1;
        profile.Address2 = data.address_info.address_2;
        profile.City = data.address_info.city;
        profile.State = data.address_info.state;
        profile.Zip = data.address_info.zip;
        profile.Address = this.getFullAddress(data.address_info);
        profile.BirthDate = this.datePipe.transform(new Date(data.birth_date), 'yyyy-MM-dd');
        profile.Email = data.email;
        profile.IsAdmin = data.role == "admin" ? true : false;
    }
}