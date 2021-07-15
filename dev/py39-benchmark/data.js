window.BENCHMARK_DATA = {
  "lastUpdate": 1626355471787,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "aaa82973d34b0f1385bd4653cf6bde5f9d60d4a0",
          "message": "Merge pull request #246 from TeoZosa/dependabot/pip/sphinx-4.1.1",
          "timestamp": "2021-07-15T13:15:52Z",
          "tree_id": "99929c266f91d1810b7699a14b27f2b8c685eabe"
        },
        "date": 1626355470335,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16496.534601827134,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024892387725138384",
            "extra": "mean: 60.618792015217636 usec\nrounds: 7289"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5072507.07151973,
            "unit": "iter/sec",
            "range": "stddev: 1.1899701348250413e-8",
            "extra": "mean: 197.14117415738633 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14631.854899153488,
            "unit": "iter/sec",
            "range": "stddev: 0.000006104884390273465",
            "extra": "mean: 68.34403477154862 usec\nrounds: 8599"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 152861.5515422647,
            "unit": "iter/sec",
            "range": "stddev: 9.436162250792898e-7",
            "extra": "mean: 6.5418673951082456 usec\nrounds: 42193"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16601.077049829375,
            "unit": "iter/sec",
            "range": "stddev: 0.000004869917502850577",
            "extra": "mean: 60.23705552347147 usec\nrounds: 13832"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5086170.933315631,
            "unit": "iter/sec",
            "range": "stddev: 7.744695767387784e-9",
            "extra": "mean: 196.6115596804501 nsec\nrounds: 48542"
          }
        ]
      }
    ]
  }
}