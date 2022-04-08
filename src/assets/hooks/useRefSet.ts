const useRefSet = (
  allRefs: React.MutableRefObject<{
    [node: string]: gsap.TweenTarget;
  }>
) => {
  return (refName: string, node: HTMLDivElement | null) => {
    // eslint-disable-next-line no-param-reassign
    if (!!node) allRefs.current[refName] = node;
  };
};

export default useRefSet;
