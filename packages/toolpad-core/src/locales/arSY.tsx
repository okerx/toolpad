import type { LocaleText } from '../AppProvider/LocalizationProvider';
import { getLocalization } from './getLocalization';

const arSYLabels: Partial<LocaleText> = {
  // Account
  accountSignInLabel: 'تسجيل الدخول',
  accountSignOutLabel: 'تسجيل الخروج',

  // AccountPreview
  accountPreviewTitle: 'الحساب',
  accountPreviewIconButtonLabel: 'المستخدم الحالي',

  // SignInPage
  signInTitle: (brandingTitle?: string) =>
    brandingTitle ? `تسجيل الدخول إلى ${brandingTitle}` : 'تسجيل الدخول',
  signInSubtitle: 'أهلاً بك، يرجى تسجيل الدخول للمتابعة',
  signInRememberMe: 'تذكرني',
  providerSignInTitle: (provider: string) => `تسجيل الدخول باستخدام ${provider}`,

  // Common authentication labels
  email: 'البريد الإلكتروني',
  password: 'كلمة المرور',
  username: 'اسم المستخدم',
  passkey: 'مفتاح المرور',

  // Common action labels
  save: 'حفظ',
  cancel: 'إلغاء',
  ok: 'موافق',
  or: 'أو',
  to: 'إلى',
  with: 'مع',
  close: 'إغلاق',
  delete: 'حذف',
  alert: 'تنبيه',
  confirm: 'تأكيد',
  loading: 'جاري التحميل...',

  // CRUD
  createNewButtonLabel: 'إنشاء جديد',
  reloadButtonLabel: 'إعادة تحميل البيانات',
  createLabel: 'إنشاء',
  createSuccessMessage: 'تم إنشاء العنصر بنجاح.',
  createErrorMessage: 'فشل في إنشاء العنصر. السبب:',
  editLabel: 'تعديل',
  editSuccessMessage: 'تم تعديل العنصر بنجاح.',
  editErrorMessage: 'فشل في تعديل العنصر. السبب:',
  deleteLabel: 'حذف',
  deleteConfirmTitle: 'حذف العنصر؟',
  deleteConfirmMessage: 'هل ترغب في حذف هذا العنصر؟',
  deleteConfirmLabel: 'حذف',
  deleteCancelLabel: 'إلغاء',
  deleteSuccessMessage: 'تم حذف العنصر بنجاح.',
  deleteErrorMessage: 'فشل في حذف العنصر. السبب:',
  deletedItemMessage: 'تم حذف هذا العنصر.',
};

export default getLocalization(arSYLabels);
