<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\User;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Task extends Model
{
    use HasFactory;
    protected $table = 'tasks';
    protected $fillable = [
        'name', 'description', 'deadline','creator','assignee', 'workspace','status', 'priority'
    ];

    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class,'creator');
    }

    public function assignee(): BelongsTo
    {
        return $this->belongsTo(User::class,'assignee');
    }
  
}
