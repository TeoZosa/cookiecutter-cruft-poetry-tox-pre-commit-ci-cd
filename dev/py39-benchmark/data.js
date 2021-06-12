window.BENCHMARK_DATA = {
  "lastUpdate": 1623460668001,
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
          "id": "906c2d7f632718bd7c587255986dd0be513bf1ea",
          "message": "Merge pull request #213 from TeoZosa/dependabot/pip/black-21.6b0\n\n⬆️ Bump black from 21.5b2 to 21.6b0",
          "timestamp": "2021-06-12T01:13:36Z",
          "tree_id": "136164458e6bf1fdcca37fe503b422409fd1f37d"
        },
        "date": 1623460667111,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16566.47661510242,
            "unit": "iter/sec",
            "range": "stddev: 0.000006031136399668348",
            "extra": "mean: 60.36286551651995 usec\nrounds: 7711"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5016249.666946906,
            "unit": "iter/sec",
            "range": "stddev: 1.220371494461995e-8",
            "extra": "mean: 199.35211889281948 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14584.230021729718,
            "unit": "iter/sec",
            "range": "stddev: 0.000002317227450332875",
            "extra": "mean: 68.56721256521968 usec\nrounds: 9757"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 149236.00332988842,
            "unit": "iter/sec",
            "range": "stddev: 4.155319634516801e-7",
            "extra": "mean: 6.700795905057072 usec\nrounds: 44445"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16653.55649863821,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014828737777583387",
            "extra": "mean: 60.04723375945384 usec\nrounds: 9775"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5138715.092658732,
            "unit": "iter/sec",
            "range": "stddev: 5.622885062589344e-9",
            "extra": "mean: 194.60117596880875 nsec\nrounds: 50503"
          }
        ]
      }
    ]
  }
}