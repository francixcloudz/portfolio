import { AllRefsGsap } from "types/animations";

const useRefSet =
  (allRefs: React.MutableRefObject<AllRefsGsap>) => (refName: string, node: HTMLElement | null) => {
    // eslint-disable-next-line no-param-reassign
    if (node) allRefs.current[refName] = node;
  };

export default useRefSet;

export class RefSet {
  private readonly allRefs: AllRefsGsap;

  public constructor(allRefs: AllRefsGsap) {
    this.allRefs = allRefs;
  }

  public get(refName: string) {
    return this.allRefs[refName];
  }

  public child(refName: string, index: number) {
    return (this.get(refName) as HTMLElement).children[index];
  }

  public children(refName: string) {
    const response = (this.get(refName) as HTMLElement)?.children;
    return response ? [...response] : [];
  }
}
