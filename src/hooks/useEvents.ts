'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { EntityResponse } from "@/hooks/interfaces/base";
import { EventData } from "@/components/producers components/events/EventCard";

export function useEvents(showFinishedEvents?: boolean) {
  const [events, setEvents] = useState<EventData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        setLoading(true);
        const response = await axios.get(
          'https://api.progamers.com.br/public/events?limit=20'
        );

        let fetchedEvents: EventData[] = [];

        // Handle the API response structure
        if (response.data && Array.isArray(response.data)) {
          // The API now returns an array of events directly
          fetchedEvents = response.data;
        } else if (response.data && Array.isArray(response.data.data)) {
          // Fallback to the old format if the new structure is not found
          fetchedEvents = response.data.data
            .map((item: EntityResponse<any>) => ({
              entityId: item.entityId,
              entity: item.entity,
              files: item.files
            }));
        } else {
          // Last resort fallback
          fetchedEvents = response.data || [];
        }

        const now = new Date();

        // Filter events based on showFinishedEvents parameter
        if (showFinishedEvents === true) {
          // Show only finished events
          const finishedEvents = fetchedEvents.filter(event => {
            const endDate = new Date(event.entity.end_date);
            return endDate < now; // Event is finished if end_date is before now
          });
          setEvents(finishedEvents);
        } else {
          // Filter out finished events by default
          const upcomingEvents = fetchedEvents.filter(event => {
            const endDate = new Date(event.entity.end_date);
            return endDate >= now; // Event is not finished if end_date is not before now
          });
          setEvents(upcomingEvents);
        }
      } catch (error) {
        console.error('Erro ao buscar eventos:', error);
        setError(error instanceof Error ? error : new Error('Unknown error occurred'));
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, [showFinishedEvents]);

  return { events, loading, error };
}
