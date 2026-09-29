/**
 * DHALI AGRO - LocalStorage Persistence Utility
 * Future-proofed to plug directly into Supabase client!
 */

export const saveDealerApplication = (formData) => {
  try {
    const existing = JSON.parse(localStorage.getItem('dhali_dealer_applications') || '[]');
    const record = {
      id: Date.now(),
      ...formData,
      status: 'new',
      created_at: new Date().toISOString()
    };
    existing.unshift(record);
    localStorage.setItem('dhali_dealer_applications', JSON.stringify(existing));
    return { success: true, data: record };
  } catch (error) {
    console.error('Storage error:', error);
    return { success: false, error };
  }
};

export const saveFarmerRequest = (formData) => {
  try {
    const existing = JSON.parse(localStorage.getItem('dhali_farmer_requests') || '[]');
    const record = {
      id: Date.now(),
      ...formData,
      status: 'new',
      created_at: new Date().toISOString()
    };
    existing.unshift(record);
    localStorage.setItem('dhali_farmer_requests', JSON.stringify(existing));
    return { success: true, data: record };
  } catch (error) {
    console.error('Storage error:', error);
    return { success: false, error };
  }
};

export const saveContactMessage = (formData) => {
  try {
    const existing = JSON.parse(localStorage.getItem('dhali_contact_messages') || '[]');
    const record = {
      id: Date.now(),
      ...formData,
      status: 'new',
      created_at: new Date().toISOString()
    };
    existing.unshift(record);
    localStorage.setItem('dhali_contact_messages', JSON.stringify(existing));
    return { success: true, data: record };
  } catch (error) {
    console.error('Storage error:', error);
    return { success: false, error };
  }
};

export const saveNewsletterSubscription = (email) => {
  try {
    const existing = JSON.parse(localStorage.getItem('dhali_newsletter_subscribers') || '[]');
    if (!existing.includes(email)) {
      existing.unshift(email);
      localStorage.setItem('dhali_newsletter_subscribers', JSON.stringify(existing));
    }
    return { success: true };
  } catch (error) {
    console.error('Storage error:', error);
    return { success: false, error };
  }
};

export const saveNewsletterSubscriber = saveNewsletterSubscription;
