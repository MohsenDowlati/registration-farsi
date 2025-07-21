declare namespace danamit {
  type RegisterNavigation = { id: number; href: string };

  type Data = {
    Boom: string;
  };

  type Headers = Readonly<Record<string, string | boolean>>;
  type BottomNavigation = Array<{
    id: number;
    label: string;
    text: string;
    href: string;
    icon: JSX.Element;
  }>;
  interface PageProps {
    title: string;
    className?: string;
    children: React.ReactNode;
  }

  interface Svg {
    className?: string;
    onClick?: () => void;
  }

  interface ToastsProps {
    message: string;
    setToast: (toast: boolean) => void;
    toast: boolean;
    type: string;
  }

  interface RegNavProps {
    link: string;
    linkSkip?: string;
  }

  interface PasswordInputProps {
    text: string;
    isValid: boolean;
    isVisible: boolean;
    onChange?: (password: string) => void;
    handleVisibility?: () => void;
  }

  interface IntervalProps {
    min: number;
    max: number;
    step: number;
    onChange?: (value: string) => void;
    initialText: string;
  }

  interface BtnProps {
    text: string;
    onClick?: () => void;
    backgroundColor?: string;
  }

  interface AcceptButtonProps {
    link: string;
    isOK: boolean;
  }

  interface TypeCardProps {
    text: string;
    color: string;
    onClick: () => void;
  }

  interface TopicCardProps {
    title: string;
    key: string;
    onSelect?: (topic: never) => void;
    isSelected?: boolean;
  }

  interface OTPFieldProps {
    length?: number;
    isOkay: boolean;
    onComplete: (code: string) => void;
  }

  interface PhotoHolderProps {
    onUpload: (src: string) => void;
  }

  interface PhoneFieldProps {
    onChange: (newPhone: string) => void;
    isOK: boolean;
  }

  interface NameInputProps {
    text: string;
    isValid?: boolean;
    onChange: (value: string) => void;
    ltr?: boolean;
  }

  interface EmailFieldProps {
    text: string;
    isValid?: boolean;
    onChange: (value: string) => void;
  }
}
