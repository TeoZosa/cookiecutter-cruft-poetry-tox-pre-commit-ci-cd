window.BENCHMARK_DATA = {
  "lastUpdate": 1624580036313,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "357638701e6f63b0b00512ffef282e0ee3d55e4c",
          "message": "Merge pull request #220 from TeoZosa/dependabot/pip/mypy-0.910\n\n⬆️ Bump mypy from 0.902 to 0.910",
          "timestamp": "2021-06-25T00:04:34Z",
          "tree_id": "c31b1bad261be13ac6e551cebcaf480c9fbd0b93"
        },
        "date": 1624580034677,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 13667.016307596927,
            "unit": "iter/sec",
            "range": "stddev: 0.00001191776963406497",
            "extra": "mean: 73.16885979305823 usec\nrounds: 6469"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4969694.4307644935,
            "unit": "iter/sec",
            "range": "stddev: 9.700065580147348e-8",
            "extra": "mean: 201.21961499509942 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12908.905257877306,
            "unit": "iter/sec",
            "range": "stddev: 0.00002587103725737769",
            "extra": "mean: 77.46590280301092 usec\nrounds: 9311"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 148928.57282960386,
            "unit": "iter/sec",
            "range": "stddev: 2.954727263892493e-7",
            "extra": "mean: 6.714628234194836 usec\nrounds: 43479"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14328.285417171624,
            "unit": "iter/sec",
            "range": "stddev: 0.00001128163686518887",
            "extra": "mean: 69.79202122827324 usec\nrounds: 14085"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5065619.374867848,
            "unit": "iter/sec",
            "range": "stddev: 1.0295394513732658e-8",
            "extra": "mean: 197.40922599934 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}