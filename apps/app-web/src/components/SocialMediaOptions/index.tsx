import LineSvg from '@/assets/icons/line.svg';
import GoogleSvg from '@/assets/icons/google.svg';
import FacebookSvg from '@/assets/icons/facebook.svg';
import TwitterSvg from '@/assets/icons/twitter.svg';

export const SocialMediaOptions = () => {
  return (
    <div>
      <p className="mt-5 mb-5 flex items-center justify-center">
        <LineSvg />
        <span className="ml-2 mr-2">Or Login with</span>
        <LineSvg />
      </p>

      <div className="flex items-center justify-center gap-10">
        <div className="border-1 border-brand-300 rounded-lg p-4 w-18 h-18 flex items-center justify-center">
          <GoogleSvg />
        </div>
        <div className="border-1 border-brand-300 rounded-lg p-4 w-18 h-18 flex items-center justify-center">
          <FacebookSvg />
        </div>
        <div className="border-1 border-brand-300 rounded-lg p-4 w-18 h-18 flex items-center justify-center">
          <TwitterSvg />
        </div>
      </div>
    </div>
  );
};
