export type HandleSubmit = (props: {
  event: React.BaseSyntheticEvent;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => void;
