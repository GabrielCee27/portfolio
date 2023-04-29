const DottedExternalLink: React.FC<{
  href: string;
  children: React.ReactNode;
}> = (props) => {
  return (
    <a className="underline decoration-dotted" target="_blank" {...props} />
  );
};

export default DottedExternalLink;
