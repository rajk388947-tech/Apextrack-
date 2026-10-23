import React, { useState, useEffect } from 'react';
import { Check, Plus, Minus, RotateCcw, Dumbbell, Timer, Flame, ArrowUpRight } from 'lucide-react';
import { WorkoutSet, ExerciseDemo } from '../types';

interface Props {
  onOpenTrial: () => void;
  compact?: boolean;
}

const initialExercises: ExerciseDemo[] = [
  {
    id: 'squat',
    name: 'Barbell Back Squat',
    targetMuscle: 'Quads & Glutes',
    previousBest: '315 lbs x 5 reps',
    nextTarget: '320 lbs x 5 reps',
    sets: [
      { id: 's1', setNumber: 1, weightLbs: 275, reps: 5, rpe: 7, completed: true },
      { id: 's2', setNumber: 2, weightLbs: 300, reps: 5, rpe: 8, completed: true },
      { id: 's3', setNumber: 3, weightLbs: 320, reps: 5, rpe: 8.5, completed: false, isPersonalRecord: true },
    ],
  },
  {
    id: 'bench',
    name: 'Barbell Bench Press',
    targetMuscle: 'Chest & Triceps',
    previousBest: '225 lbs x 5 reps',
    nextTarget: '230 lbs x 5 reps',
    sets: [
      { id: 'b1', setNumber: 1, weightLbs: 185, reps: 6, rpe: 7, completed: true },
      { id: 'b2', setNumber: 2, weightLbs: 215, reps: 5, rpe: 8, completed: true },
      { id: 'b3', setNumber: 3, weightLbs: 230, reps: 5, rpe: 9, completed: false, isPersonalRecord: true },
    ],
  },
  {
    id: 'deadlift',
    name: 'Conventional Deadlift',
    targetMuscle: 'Posterior Chain',
    previousBest: '385 lbs x 4 reps',
    nextTarget: '390 lbs x 4 reps',
    sets: [
      { id: 'd1', setNumber: 1, weightLbs: 335, reps: 5, rpe: 7.5, completed: true },
      { id: 'd2', setNumber: 2, weightLbs: 365, reps: 4, rpe: 8.5, completed: true },
      { id: 'd3', setNumber: 3, weightLbs: 390, reps: 4, rpe: 9, completed: false, isPersonalRecord: true },
    ],
  },
];

export const InteractiveTrackerPreview: React.FC<Props> = ({ onOpenTrial, compact = false }) => {
  const [exercises, setExercises] = useState<ExerciseDemo[]>(initialExercises);
  const [selectedExId, setSelectedExId] = useState<string>('squat');
  const [restSeconds, setRestSeconds] = useState<number>(74);
  const [isResting, setIsResting] = useState<boolean>(true);

  // Rest timer tick simulation
  useEffect(() => {
    if (!isResting) return;
    const interval = setInterval(() => {
      setRestSeconds((prev) => (prev > 0 ? prev - 1 : 90));
    }, 1000);
    return () => clearInterval(interval);
  }, [isResting]);

  const currentExercise = exercises.find((e) => e.id === selectedExId) || exercises[0];

  const handleToggleSet = (setId: string) => {
    setExercises((prev) =>
      prev.map((ex) => {
        if (ex.id !== selectedExId) return ex;
        return {
          ...ex,
          sets: ex.sets.map((s) => {
            if (s.id !== setId) return s;
            const nextCompleted = !s.completed;
            if (nextCompleted) {
              setRestSeconds(90);
              setIsResting(true);
            }
            return { ...s, completed: nextCompleted };
          }),
        };
      })
    );
  };

  const handleAdjustWeight = (setId: string, delta: number) => {
    setExercises((prev) =>
      prev.map((ex) => {
        if (ex.id !== selectedExId) return ex;
        return {
          ...ex,
          sets: ex.sets.map((s) => {
            if (s.id !== setId) return s;
            const updatedWeight = Math.max(45, s.weightLbs + delta);
            return { ...s, weightLbs: updatedWeight };
          }),
        };
      })
    );
  };

  const handleAdjustReps = (setId: string, delta: number) => {
    setExercises((prev) =>
      prev.map((ex) => {
        if (ex.id !== selectedExId) return ex;
        return {
          ...ex,
          sets: ex.sets.map((s) => {
            if (s.id !== setId) return s;
            const updatedReps = Math.max(1, s.reps + delta);
            return { ...s, reps: updatedReps };
          }),
        };
      })
    );
  };

  // Calculate session volume
  const completedSets = currentExercise.sets.filter((s) => s.completed);
  const totalVolume = completedSets.reduce((sum, s) => sum + s.weightLbs * s.reps, 0);

  // Plate math helper for 45lb barbell
  const activeSet = currentExercise.sets.find((s) => !s.completed) || currentExercise.sets[currentExercise.sets.length - 1];
  const sideWeight = Math.max(0, (activeSet.weightLbs - 45) / 2);
  const plates45 = Math.floor(sideWeight / 45);
  const plates25 = Math.floor((sideWeight % 45) / 25);
  const plates10 = Math.floor(((sideWeight % 45) % 25) / 10);
  const plates5 = Math.floor((((sideWeight % 45) % 25) % 10) / 5);

  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins}:${remainder < 10 ? '0' : ''}${remainder}`;
  };

  return (
    <div className="w-full bg-[#111722] rounded-xl border border-slate-800 shadow-2xl overflow-hidden text-slate-200">
      {/* Tracker Header */}
      <div className="p-4 sm:p-5 border-b border-slate-800/80 bg-[#141C2B] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <Dumbbell className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-mono-nums text-slate-400 uppercase tracking-wider">Live Tracker Sandbox</div>
            <div className="text-base font-semibold text-white">Today: Heavy Lower Progression</div>
          </div>
        </div>

        {/* Rest Timer Widget */}
        <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs">
          <Timer className="w-4 h-4 text-emerald-400" />
          <span className="text-slate-400">Rest Timer:</span>
          <span className="font-mono-nums font-bold text-emerald-400">{formatTimer(restSeconds)}</span>
          <button
            onClick={() => setRestSeconds(90)}
            title="Reset Rest Timer"
            className="text-slate-500 hover:text-slate-300 transition-colors ml-1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Exercise Switcher (Segmented Button Controls) */}
      <div className="p-3 bg-[#0D131D] border-b border-slate-800 flex items-center gap-1.5 overflow-x-auto">
        {exercises.map((ex) => {
          const isSelected = ex.id === selectedExId;
          return (
            <button
              key={ex.id}
              onClick={() => setSelectedExId(ex.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-colors ${
                isSelected
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              {ex.name}
            </button>
          );
        })}
      </div>

      {/* Main Tracker Body */}
      <div className="p-4 sm:p-5 space-y-4">
        {/* Overload Guidance Banner */}
        <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800/90 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div>
            <span className="text-slate-400">Previous best: </span>
            <span className="font-mono-nums font-semibold text-slate-200">{currentExercise.previousBest}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <Flame className="w-3.5 h-3.5" /> Overload Target:
            </span>
            <span className="font-mono-nums font-bold text-white bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              {currentExercise.nextTarget}
            </span>
          </div>
        </div>

        {/* Set Table */}
        <div className="space-y-2">
          <div className="grid grid-cols-12 gap-2 text-[11px] font-mono-nums uppercase tracking-wider text-slate-400 px-2">
            <span className="col-span-2">Set</span>
            <span className="col-span-4 text-center">Weight (lbs)</span>
            <span className="col-span-3 text-center">Reps</span>
            <span className="col-span-3 text-right">Done</span>
          </div>

          {currentExercise.sets.map((s) => (
            <div
              key={s.id}
              className={`grid grid-cols-12 gap-2 items-center p-2.5 rounded-lg border transition-all ${
                s.completed
                  ? 'bg-emerald-950/20 border-emerald-500/30 text-white'
                  : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
              }`}
            >
              <div className="col-span-2 flex items-center gap-1.5">
                <span className="font-mono-nums font-bold text-xs text-slate-300">#{s.setNumber}</span>
                {s.isPersonalRecord && (
                  <span className="text-[10px] font-mono-nums font-bold text-amber-400 bg-amber-500/10 px-1 py-0.2 rounded border border-amber-500/30">
                    PR
                  </span>
                )}
              </div>

              {/* Weight Adjustment */}
              <div className="col-span-4 flex items-center justify-center gap-1">
                <button
                  onClick={() => handleAdjustWeight(s.id, -5)}
                  disabled={s.completed}
                  className="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed text-xs"
                  title="Minus 5 lbs"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="font-mono-nums font-bold text-sm w-12 text-center text-white">{s.weightLbs}</span>
                <button
                  onClick={() => handleAdjustWeight(s.id, 5)}
                  disabled={s.completed}
                  className="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed text-xs"
                  title="Add 5 lbs"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>

              {/* Reps Adjustment */}
              <div className="col-span-3 flex items-center justify-center gap-1">
                <button
                  onClick={() => handleAdjustReps(s.id, -1)}
                  disabled={s.completed}
                  className="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed text-xs"
                  title="Minus 1 rep"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="font-mono-nums font-bold text-sm w-8 text-center text-white">{s.reps}</span>
                <button
                  onClick={() => handleAdjustReps(s.id, 1)}
                  disabled={s.completed}
                  className="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed text-xs"
                  title="Add 1 rep"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>

              {/* Completion Toggle */}
              <div className="col-span-3 flex justify-end">
                <button
                  onClick={() => handleToggleSet(s.id)}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                    s.completed
                      ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                  }`}
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>{s.completed ? 'Logged' : 'Log'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Plate Calculator Strip */}
        <div className="p-3 rounded-lg bg-[#0C121D] border border-slate-800 text-xs flex flex-wrap items-center justify-between gap-2">
          <div className="text-slate-400">
            <span>Barbell Math ({activeSet.weightLbs} lbs total):</span>
            <div className="font-mono-nums text-slate-200 mt-0.5">
              45 lb bar + each side:{' '}
              <strong className="text-emerald-400">
                {plates45 > 0 ? `${plates45}x 45lb ` : ''}
                {plates25 > 0 ? `${plates25}x 25lb ` : ''}
                {plates10 > 0 ? `${plates10}x 10lb ` : ''}
                {plates5 > 0 ? `${plates5}x 5lb` : ''}
                {sideWeight === 0 ? 'Empty bar' : ''}
              </strong>
            </div>
          </div>
          <div className="text-right">
            <span className="text-slate-400">Volume logged:</span>
            <div className="font-mono-nums font-bold text-white text-sm">{totalVolume.toLocaleString()} lbs</div>
          </div>
        </div>

        {!compact && (
          <div className="pt-1 flex items-center justify-between border-t border-slate-800/80 text-xs">
            <span className="text-slate-400">Tap buttons to test real in-gym flow</span>
            <button
              onClick={onOpenTrial}
              className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
            >
              <span>See full program library</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
