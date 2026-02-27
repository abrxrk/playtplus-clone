import { useState } from 'react';
import { router } from 'expo-router';
import CreateEventScreen from '@/components/screens/events/create-event';
import { createEvent, CreateEventData } from '@/services/event.service';

export default function CreateEventRoute() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCreateEvent = async (data: CreateEventData) => {
    setIsLoading(true);
    setError(null);

    const result = await createEvent(data);

    setIsLoading(false);

    if (!result.success) {
      setError(result.error || 'Failed to create event');
      return;
    }

    router.back();
  };

  return (
    <CreateEventScreen
      onCreateEvent={handleCreateEvent}
      isLoading={isLoading}
      error={error}
    />
  );
}
