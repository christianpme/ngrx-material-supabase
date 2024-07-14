// src/app/services/supabase.service.ts
import { Injectable } from '@angular/core';
import { createClient, SupabaseClient, VerifyOtpParams } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.SUPABASE_URL, 
      environment.SUPABASE_KEY
    );
  }

  signInWithPassword(email: string, password: string) {
    return this.supabase.auth.signInWithPassword({ email, password });
  }

  signInWithOtp(email: string) {
    return this.supabase.auth.signInWithOtp({ 
      email,
      options: {
        // set this to false if you do not want the user to be automatically signed up
        shouldCreateUser: false
      }
    });
  }

  signInVerifyOtp(params: VerifyOtpParams) {
    return this.supabase.auth.verifyOtp(params);
  }

  signUp(email: string, password: string) {
    return this.supabase.auth.signUp({ email, password });
  }

  signOut() {
    return this.supabase.auth.signOut();
  }

  getUser() {
    return this.supabase.auth.getUser();
  }
}