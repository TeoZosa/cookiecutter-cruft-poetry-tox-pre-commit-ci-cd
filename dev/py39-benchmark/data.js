window.BENCHMARK_DATA = {
  "lastUpdate": 1630687985012,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "id": "8a8f7591b0f66ba9182eb8bf388287c1da8f5fff",
          "message": ":bug: Fix `jupyter_notebook_project` logic updates",
          "timestamp": "2021-09-03T16:47:20Z",
          "tree_id": "aee1ef348f2bfea242d89005cf8ca1844607da35"
        },
        "date": 1630687982112,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15120.592090180442,
            "unit": "iter/sec",
            "range": "stddev: 0.000020917727518391935",
            "extra": "mean: 66.13497633134462 usec\nrounds: 12675"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5077601.002137185,
            "unit": "iter/sec",
            "range": "stddev: 1.7470273697318863e-7",
            "extra": "mean: 196.94339897505805 nsec\nrounds: 55249"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13539.844376197392,
            "unit": "iter/sec",
            "range": "stddev: 0.000016179226974109347",
            "extra": "mean: 73.8560925971917 usec\nrounds: 8078"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 137170.85141753007,
            "unit": "iter/sec",
            "range": "stddev: 0.0000075405709680702554",
            "extra": "mean: 7.29017855955513 usec\nrounds: 48544"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14910.86959215302,
            "unit": "iter/sec",
            "range": "stddev: 0.0000361555310780139",
            "extra": "mean: 67.06516972868297 usec\nrounds: 13987"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5193150.522704745,
            "unit": "iter/sec",
            "range": "stddev: 8.163143438314063e-8",
            "extra": "mean: 192.56133547988276 nsec\nrounds: 51547"
          }
        ]
      }
    ]
  }
}