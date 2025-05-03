import { UserFormData } from "@/types/form";

interface SummaryItemProps {
  label: string;
  value: string | undefined;
}

const SummaryItem: React.FC<SummaryItemProps> = ({ label, value }) => (
  <div className="flex justify-between items-center">
    <span className="text-gray-600">{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);

interface SummaryCardProps {
  data: UserFormData;
}

export const SummaryCard: React.FC<SummaryCardProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 space-y-4">
      <div className="space-y-3">
        <SummaryItem label="Name" value={data.name} />
        <SummaryItem label="Email" value={data.email} />
        <SummaryItem 
          label="Phone" 
          value={data.phone ? `+${data.countryCode} ${data.phone}` : undefined} 
        />
        <SummaryItem label="Platform" value={data.platform} />
        <SummaryItem label="Budget Range" value={data.budget} />
        {data.needsNda && (
          <SummaryItem label="NDA Required" value="Yes" />
        )}
      </div>
    </div>
  );
}; 